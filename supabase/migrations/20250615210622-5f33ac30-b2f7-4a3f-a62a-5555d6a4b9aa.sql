
-- Add a message column to the boot_entries table for optional messages from leads
ALTER TABLE public.boot_entries ADD COLUMN message TEXT;

-- Drop the leads table as it's being consolidated into boot_entries
DROP TABLE public.leads;
