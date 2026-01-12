# Domain Setup Guide for Production Emails

## Why You Need This

**Current Issue**: Resend free tier only allows sending emails to `etomer9@gmail.com` (your signup email).

**Goal**: Allow ANY client/visitor to submit the contact form and send email to `yuliamosh.law@gmail.com`.

**Solution**: Verify a custom domain with Resend.

---

## Option 1: Verify Your Domain (RECOMMENDED for Production)

### Prerequisites

- A domain name (e.g., `yuliamoshinskybiton.com`)
- If you don't have one, buy from:
  - [Namecheap](https://www.namecheap.com) (~$10/year)
  - [GoDaddy](https://www.godaddy.com) (~$15/year)
  - [Cloudflare](https://www.cloudflare.com/products/registrar/) (at-cost)

### Step 1: Add Domain to Resend

1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter your domain (e.g., `yuliamoshinskybiton.com`)
4. Click **Submit**

### Step 2: Get DNS Records

Resend will show you DNS records like this:

| Type | Name               | Value                          |
| ---- | ------------------ | ------------------------------ |
| MX   | @                  | mx1.resend.com (priority 10)   |
| MX   | @                  | mx2.resend.com (priority 20)   |
| TXT  | @                  | v=spf1 include:resend.com ~all |
| TXT  | resend.\_domainkey | v=DKIM1; k=rsa; p=...          |

### Step 3: Add DNS Records to Your Domain Provider

#### For Namecheap:

1. Log in to [Namecheap](https://www.namecheap.com)
2. Go to **Domain List** → Click **Manage** next to your domain
3. Click **Advanced DNS**
4. Add each record from Resend:
   - Click **Add New Record**
   - Select the **Type** (MX, TXT)
   - Enter **Host** (Name)
   - Enter **Value**
   - Click **Save**

#### For GoDaddy:

1. Log in to [GoDaddy](https://www.godaddy.com)
2. Go to **My Products** → **DNS**
3. Click **Add** for each record type
4. Enter the details from Resend
5. Click **Save**

#### For Cloudflare:

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain
3. Go to **DNS** → **Records**
4. Click **Add record**
5. Enter each record from Resend
6. Click **Save**

### Step 4: Wait for Verification

- DNS propagation takes **5-30 minutes**
- Go back to Resend dashboard and check verification status
- You'll see a green checkmark when verified ✅

### Step 5: Update Your Code

Once verified, update the `from` address in your code:

1. Open: `src/app/api/contact/route.ts`
2. Change line 17:

```typescript
from: "Yulia Law Website <contact@yuliamoshinskybiton.com>",
```

Replace `yourdomain.com` with your actual domain.

### Step 6: Test

1. Restart your dev server
2. Fill out the contact form
3. Check `yuliamosh.law@gmail.com` - you should receive the email! 🎉

---

## Option 2: Temporary Workaround (Gmail Forwarding)

If you don't want to buy a domain yet:

### Step 1: Use etomer9@gmail.com as Recipient

The code is currently set to send to `etomer9@gmail.com`.

### Step 2: Set Up Gmail Forwarding

1. Log in to `etomer9@gmail.com`
2. Click **Settings** (gear icon) → **See all settings**
3. Go to **Forwarding and POP/IMAP**
4. Click **Add a forwarding address**
5. Enter: `yuliamosh.law@gmail.com`
6. Click **Next** → **Proceed**
7. Gmail will send a confirmation code to `yuliamosh.law@gmail.com`
8. Check that inbox and click the verification link
9. Back in `etomer9@gmail.com` settings, select **Forward a copy**
10. Choose whether to keep or delete in `etomer9@gmail.com`

Now all contact form submissions will automatically forward to `yuliamosh.law@gmail.com`!

**Pros**: Quick, no cost  
**Cons**: Emails come "from" etomer9@gmail.com, not professional

---

## Option 3: Deploy to Vercel and Get a Free Domain

If you deploy to Vercel, you can:

1. Get a free `*.vercel.app` subdomain (e.g., `yulia-law.vercel.app`)
2. Use that for email verification in Resend
3. Later, add a custom domain

---

## Pricing Note

- **Resend Free Tier**: 100 emails/day, 3,000/month (plenty for a law website)
- **Domain**: ~$10-15/year
- **Vercel Hosting**: Free for personal projects

---

## Summary

**For Testing Now**: Use Option 2 (Gmail forwarding)  
**For Production**: Use Option 1 (verify domain) - looks professional and reliable

---

## Need Help?

Check the [Resend Documentation](https://resend.com/docs/dashboard/domains/introduction) for detailed guides with screenshots.
