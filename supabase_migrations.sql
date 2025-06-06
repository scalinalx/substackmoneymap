-- Add checkout status tracking to leads table
ALTER TABLE leads 
ADD COLUMN checkout_status TEXT DEFAULT 'lead_captured' 
CHECK (checkout_status IN ('lead_captured', 'checkout_started', 'payment_completed', 'abandoned'));

-- Add timestamp for checkout start
ALTER TABLE leads 
ADD COLUMN checkout_started_at TIMESTAMP WITH TIME ZONE;

-- Add timestamp for payment completion
ALTER TABLE leads 
ADD COLUMN payment_completed_at TIMESTAMP WITH TIME ZONE;

-- Optional: Add index for better query performance on status
CREATE INDEX idx_leads_checkout_status ON leads(checkout_status);
CREATE INDEX idx_leads_created_at ON leads(created_at); 