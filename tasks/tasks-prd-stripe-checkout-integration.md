# Stripe Checkout Integration Tasks

Based on: `prd-stripe-checkout-integration.md`

## Relevant Files

- `api/create-checkout-session.js` - Vercel API function to create Stripe checkout sessions with pricing and discount support
- `api/create-checkout-session.test.js` - Unit tests for checkout session creation API
- `api/webhook.js` - Vercel API function to handle Stripe payment webhooks and update database
- `api/webhook.test.js` - Unit tests for webhook handler
- `src/components/CheckoutStep1.js` - Existing lead capture component to integrate with Stripe checkout
- `src/components/CheckoutStep1.test.js` - Unit tests for updated CheckoutStep1 component
- `src/components/CheckoutSuccess.js` - New success page component for completed payments
- `src/components/CheckoutSuccess.test.js` - Unit tests for CheckoutSuccess component
- `src/components/CheckoutCancel.js` - New cancel/error page component for failed payments
- `src/components/CheckoutCancel.test.js` - Unit tests for CheckoutCancel component
- `src/App.js` - Main app component to add new routes for success/cancel pages
- `src/lib/stripe.js` - Stripe configuration and helper functions
- `src/lib/stripe.test.js` - Unit tests for Stripe utilities
- `src/lib/supabase-helpers.js` - Database helper functions for customer data management
- `src/lib/supabase-helpers.test.js` - Unit tests for database helpers
- `package.json` - Add Stripe dependency and update scripts
- `.env.local` - Environment variables for Stripe keys and webhook secrets
- `.env.example` - Template for required environment variables
- `supabase_migrations.sql` - Database schema updates for Stripe integration data

### Notes

- Unit tests should be placed alongside their corresponding files
- Use `npx jest [optional/path/to/test/file]` to run tests
- API functions must be in `/api/` directory for Vercel serverless deployment
- Environment variables need to be set both locally and in Vercel deployment
- Database migrations must be tested in development before production deployment

## Tasks

- [ ] 1.0 Environment and Dependencies Setup
  - [ ] 1.1 Add Stripe npm package to project dependencies
  - [ ] 1.2 Create environment variables in `.env.local` for Stripe keys and webhook secret
  - [ ] 1.3 Create `.env.example` template with required variables
  - [ ] 1.4 Configure environment variables in Vercel deployment
  - [ ] 1.5 Verify Stripe SDK connection in development environment

- [ ] 2.0 Stripe Products and Database Schema Configuration
  - [ ] 2.1 Create "Newsletter Money Map Academy" product in Stripe Dashboard ($247/month recurring)
  - [ ] 2.2 Create "Newsletter Money Map VIP" product in Stripe Dashboard ($997/year recurring)
  - [ ] 2.3 Configure product metadata and branding in Stripe
  - [ ] 2.4 Add database columns for Stripe integration (customer_id, subscription_id, stripe_email, next_payment_date, customer_country, subscription_status)
  - [ ] 2.5 Run database migration in development and production environments

- [ ] 3.0 Checkout Session Creation with Pricing and Discounts
  - [ ] 3.1 Create Vercel API function for checkout session creation
  - [ ] 3.2 Implement price selection based on package type (monthly/yearly)
  - [ ] 3.3 Configure discount code support in checkout sessions
  - [ ] 3.4 Set up success and cancel URLs for redirects
  - [ ] 3.5 Add metadata to sessions for lead tracking
  - [ ] 3.6 Update lead status to `checkout_started` with timestamp

- [ ] 4.0 Webhook Processing and Payment Confirmation
  - [ ] 4.1 Create Vercel API function for Stripe webhook handling
  - [ ] 4.2 Implement webhook signature verification for security
  - [ ] 4.3 Handle `checkout.session.completed` event for initial payments
  - [ ] 4.4 Handle `invoice.payment_succeeded` event for recurring payments
  - [ ] 4.5 Extract and store customer data (email, country, subscription details)
  - [ ] 4.6 Update lead status to `payment_completed` with timestamp
  - [ ] 4.7 Calculate and store next payment due date

- [ ] 5.0 Frontend Integration and User Experience
  - [ ] 5.1 Update CheckoutStep1 component to call checkout session API
  - [ ] 5.2 Add loading state during checkout session creation
  - [ ] 5.3 Implement seamless redirect to Stripe checkout
  - [ ] 5.4 Create CheckoutSuccess component with branding and next steps
  - [ ] 5.5 Create CheckoutCancel component with retry options
  - [ ] 5.6 Add new routes to App.js for success and cancel pages
  - [ ] 5.7 Ensure mobile optimization for all checkout components

- [ ] 6.0 Data Management and Duplicate Prevention
  - [ ] 6.1 Create helper functions for customer data management
  - [ ] 6.2 Implement duplicate subscription checking by email
  - [ ] 6.3 Store comprehensive customer data for marketing
  - [ ] 6.4 Create functions to sync subscription status updates
  - [ ] 6.5 Implement customer country detection and storage

- [ ] 7.0 Error Handling and Payment Retry Logic
  - [ ] 7.1 Implement graceful error handling in checkout session creation
  - [ ] 7.2 Add user-friendly error messages for payment failures
  - [ ] 7.3 Create retry logic for failed payments with clear instructions
  - [ ] 7.4 Handle webhook processing failures with logging
  - [ ] 7.5 Add fallback contact information for payment issues

- [ ] 8.0 Security Implementation and Validation
  - [ ] 8.1 Add input validation for all API endpoints
  - [ ] 8.2 Implement rate limiting on checkout session creation
  - [ ] 8.3 Secure environment variable management
  - [ ] 8.4 Validate webhook signatures to prevent fraud
  - [ ] 8.5 Add request validation and sanitization

- [ ] 9.0 Testing and Quality Assurance
  - [ ] 9.1 Write unit tests for checkout session API
  - [ ] 9.2 Write unit tests for webhook handler
  - [ ] 9.3 Write unit tests for updated frontend components
  - [ ] 9.4 Test complete flow with both subscription packages
  - [ ] 9.5 Test payment success and failure scenarios
  - [ ] 9.6 Test discount code functionality
  - [ ] 9.7 Test duplicate prevention logic
  - [ ] 9.8 Test mobile responsiveness
  - [ ] 9.9 Perform load testing on API endpoints 