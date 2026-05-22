Act as a senior enterprise product designer creating a complete high-fidelity UI prototype for a retail financial voucher system.

The prototype must follow the existing voucher UI style but modernized with refined spacing, typography, and interaction design.

Maintain the visual DNA of the legacy system.

Design language characteristics:

Dark background
Centered white card container
Minimal UI
Red accent buttons
Simple enterprise form inputs
Clean typography
Strong whitespace

Do not create oversized buttons or large UI elements.

Keep components compact and professional.

Use modern UI polish similar to Apple enterprise dashboard interfaces.

---

GLOBAL DESIGN SYSTEM

Background
Dark charcoal #1F1F1F

Surface
White card container

Accent color
Red #E3262E

Typography
Modern sans-serif (Inter or SF Pro)

Input height
40px

Button height
40px

Border radius
8px

Card radius
12px

Card shadow
Subtle soft elevation

---

SCREEN 1
PAY OUT CATEGORY SELECTION

Centered white card.

Title
Pay Out

Grid layout
2 columns

Categories

Courier
Office Supplies
Customer Repair / Satisfaction
Repairs / Maintenance
Gasoline
Tools / Supplies
Meals
Miscellaneous

Buttons are compact outlined selection cards.

Hover state
Red border highlight.

Exit button below grid.

---

SCREEN 2
PAY OUT – COURIER FORM (DEFAULT STATE)

Header

Vouchers
User name top right
Exit link

Breadcrumb

Pay Out > Courier

Centered white form card.

Fields

Courier (Dropdown)
Transit Details (Text input)
Reason for using Courier (Text input)
Amount Paid (Currency input)
Comments (Textarea)
Attach Receipt (Checkbox or upload)

Buttons

Cancel (outlined)
Submit (red primary)

---

SCREEN 3
COURIER DROPDOWN EXPANDED

Dropdown menu showing courier vendors.

Options

Your Way
BP Distributing
ASAP
Hot Transport
Quick Courier
Quick Ship
Around Town
Other

Dropdown panel appears under field.

---

SCREEN 4
COURIER = OTHER STATE

When user selects "Other".

New field appears beside dropdown.

Courier Name (text input)

Layout adapts to two-column row.

---

SCREEN 5
FORM VALIDATION ERRORS

When user submits without required fields.

Show error states for

Courier selection
Transit details
Reason for courier
Amount paid

Field border color
Orange/red highlight

Error text below field

Example
Please enter transit details
Please enter reason for using courier
Please enter amount paid

---

SCREEN 6
VALID FORM ENTRY

Fields filled with example content.

Courier
Your Way

Transit Details
Vehicle shipment ID and logistics description

Reason
Customer requires same-day tire delivery

Amount Paid
$150.00

Comments
Optional notes

Receipt attachment indicator

---

SCREEN 7
VERIFY FUNDS POPUP

Modal overlay appears after pressing Submit.

Modal message

Verify funds to submit pay-out.

Buttons

Cancel
Confirm

Background blur behind modal.

---

SCREEN 8
INSUFFICIENT FUNDS POPUP

If funds unavailable.

Modal message

Funds not available to submit pay out.

Single button

OK

---

SCREEN 9
EXIT CONFIRMATION MODAL

If user attempts to leave form.

Modal message

Are you sure you want to clear all saved data?
Any changes made will be lost.

Buttons

No, Return to Pay Out
Yes, Exit

---

SCREEN 10
INVALID AMOUNT STATE

If user enters amount = 0.

Error message under Amount field

Please enter valid amount.

Field highlighted.

---

INTERACTION PROTOTYPE FLOW

Category screen
→ Courier form
→ Courier dropdown
→ Form entry
→ Validation
→ Submit
→ Funds verification popup
→ Success or insufficient funds

Exit flow

User presses Exit
→ Exit confirmation modal
→ Return or Exit.

---

MICRO INTERACTIONS

Dropdown open animation
120ms ease

Button hover
Subtle elevation

Error state
Smooth border highlight transition

Modal animation
Scale + fade entrance

---

LAYOUT PRINCIPLES

Centered card layout
Large whitespace
Minimal UI
Professional enterprise system design

---

PROTOTYPE OUTPUT

Create clickable prototype links between screens.

All interactive states must be connected.

Ensure flow is usable in Figma prototype mode.
