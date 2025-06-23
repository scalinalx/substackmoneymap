# Product Requirements Document: Stripe Checkout Integration

## Introduction/Overview

This feature implements a complete Stripe checkout integration for the Newsletter Money Map course funnel. The system will seamlessly transition users from the lead capture form (CheckoutStep1) to a secure Stripe checkout session, process recurring payments, and redirect to a success page for further onboarding.

**Problem:** Currently, the checkout flow stops at lead capture with no payment processing, creating a conversion bottleneck and preventing revenue generation.

**Goal:** Create a complete payment pipeline that maximizes conversions by providing a smooth, secure checkout experience with minimal friction.

## Goals

1. **Primary:** Maximize conversion rates from lead capture to paid customer
2. **Secondary:** Implement secure, PCI-compliant payment processing
3. **Tertiary:** Collect comprehensive customer data for future marketing and business administration
4. **Quaternary:** Support discount codes and promotional pricing
5. **Quinary:** Prevent duplicate purchases and subscription conflicts

## User Stories

**As a potential customer**, I want to:
- Complete my purchase quickly after providing my initial information
- Use discount codes to get promotional pricing
- Retry payment if my card is declined
- Receive clear confirmation of my purchase and next steps

**As a business owner**, I want to:
- Capture maximum revenue from qualified leads
- Collect comprehensive customer data for marketing
- Prevent duplicate subscriptions and payment conflicts
- Track payment status and subscription details
- Support promotional campaigns with discount codes

## Functional Requirements

### Core Payment Flow
1. **Checkout Session Creation:** System must create Stripe checkout sessions with appropriate product pricing based on selected package (monthly $247 or yearly $997)
2. **Lead Status Tracking:** System must update Supabase lead records with `checkout_started` status and timestamp when checkout begins
3. **Subscription Handling:** System must create recurring subscriptions (monthly or yearly) rather than one-time payments
4. **Discount Code Support:** System must allow users to apply discount codes during Stripe checkout session
5. **Payment Retry Logic:** System must redirect failed payments back to checkout with clear error messaging and retry options

### Data Management
6. **Customer Data Storage:** System must store in Supabase:
   - Next payment due date
   - Customer's country
   - Stripe email address (may differ from lead capture email)
   - Stripe customer ID
   - Stripe subscription ID
   - Payment status and timestamps
7. **Duplicate Prevention:** System must check for existing active subscriptions before creating new checkout sessions
8. **Status Synchronization:** System must update lead status to `payment_completed` via secure webhook upon successful payment

### User Experience
9. **Seamless Transition:** System must redirect from CheckoutStep1 directly to Stripe checkout without additional form steps
10. **Success Page:** System must redirect successful payments to branded success page with clear next steps
11. **Error Handling:** System must provide clear, actionable error messages for payment failures
12. **Mobile Optimization:** System must work seamlessly on mobile devices

### Technical Implementation
13. **Vercel API Functions:** System must use Vercel serverless functions for checkout session creation and webhook processing
14. **Webhook Security:** System must verify webhook signatures to ensure secure payment confirmation
15. **Environment Configuration:** System must support separate Stripe keys for development and production environments

## Non-Goals (Out of Scope)

- Skool community integration (separate feature)
- Refund processing (handled manually via Stripe dashboard)
- GDPR compliance features (not required at this time)
- Custom payment methods beyond Stripe
- Invoice generation or tax calculation
- Subscription management dashboard for customers
- Email notifications after payment (handled after Skool induction)

## Design Considerations

### Stripe Checkout Session
- Use Stripe's hosted checkout page for PCI compliance
- Implement preset products in Stripe Dashboard for stability
- Configure automatic tax collection if available
- Brand checkout page with company colors and logo

### Success Page Design
- Match existing funnel branding (black background, yellow accents)
- Clear confirmation messaging
- Prominent next steps for Skool community access
- Contact support information

### Error Handling
- User-friendly error messages
- Clear retry instructions
- Fallback contact information for payment issues

## Technical Considerations

### API Structure
- `/api/create-checkout-session.js` - Vercel function for session creation
- `/api/webhook.js` - Vercel function for payment confirmation
- Environment variables for Stripe keys and webhook secrets

### Database Schema Updates
```sql
-- Additional columns for leads table
ALTER TABLE leads ADD COLUMN stripe_customer_id TEXT;
ALTER TABLE leads ADD COLUMN stripe_subscription_id TEXT;
ALTER TABLE leads ADD COLUMN stripe_email TEXT;
ALTER TABLE leads ADD COLUMN next_payment_date TIMESTAMP WITH TIME ZONE;
ALTER TABLE leads ADD COLUMN customer_country TEXT;
ALTER TABLE leads ADD COLUMN subscription_status TEXT;
```

### Security Considerations
- Webhook signature verification
- Secure environment variable management
- Input validation for all API endpoints
- Rate limiting on checkout session creation

## Success Metrics

### Primary Metrics
- **Conversion Rate:** Percentage of users completing payment after reaching CheckoutStep1
- **Target:** Achieve >15% conversion rate from lead capture to paid customer

### Secondary Metrics
- **Payment Success Rate:** Percentage of successful payments vs. attempted payments
- **Cart Abandonment:** Percentage of users who start checkout but don't complete
- **Retry Success Rate:** Percentage of failed payments that succeed on retry

### Monitoring
- Stripe dashboard analytics
- Supabase query analytics for status tracking
- Vercel function performance metrics

## Open Questions

1. **Discount Code Strategy:** Should discount codes be percentage-based, fixed amount, or both?
2. **Trial Periods:** Do we want to offer any trial periods for the subscriptions?
3. **Currency Support:** Should we support multiple currencies or USD only?
4. **Subscription Modifications:** How should we handle customers who want to upgrade/downgrade plans?
5. **Failed Payment Handling:** How many retry attempts should we allow before marking a subscription as failed?

## Implementation Priority

### Phase 1 (MVP)
- Basic checkout session creation
- Payment webhook processing
- Success page implementation
- Basic error handling

### Phase 2 (Enhancements)
- Discount code integration
- Duplicate prevention logic
- Enhanced error handling and retry logic
- Comprehensive data collection

### Phase 3 (Optimization)
- Conversion rate optimization
- Advanced analytics integration
- Performance monitoring
- A/B testing capabilities 