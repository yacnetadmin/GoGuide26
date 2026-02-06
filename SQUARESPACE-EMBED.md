# Squarespace Embedding Guide

## How to Embed Mission Trips on Your Squarespace Page

### Step 1: Add a Code Block
1. Edit your Squarespace page
2. Click the **+** button where you want the mission trips
3. Search for **"Code"** and select the Code Block

### Step 2: Paste the Embed Code

**Copy and paste this ENTIRE code:**

```html
<div style="width:100%; max-width:1200px; margin:2rem auto; padding:0 1rem;">
  <iframe 
    src="https://yacnetadmin.github.io/GoGuide26/mission-trips.html" 
    width="100%" 
    height="3500" 
    frameborder="0"
    style="border:none; display:block;"
    id="mission-trips-iframe"
    title="2026 Mission Trips Guide">
  </iframe>
</div>

<script>
// Auto-resize iframe when accordions open/close
window.addEventListener('message', function(e) {
  if (e.data && e.data.height) {
    var iframe = document.getElementById('mission-trips-iframe');
    if (iframe) {
      iframe.style.height = (e.data.height + 50) + 'px';
    }
  }
});
</script>
```

### Step 3: Save & Publish
- Click **Apply** on the Code Block
- Click **Save** on your page
- The mission trips guide will now be embedded!

## Features
- ✅ Fully responsive (works on mobile, tablet, desktop)
- ✅ Auto-resizing (adjusts height when accordions open)
- ✅ Dark mode support (follows visitor's system preference)
- ✅ Interactive accordions
- ✅ Direct links to email contacts

## Troubleshooting

**If you see "Enable GitHub Pages" message:**
1. Go to https://github.com/yacnetadmin/GoGuide26/settings/pages
2. Under "Source", select **main** branch
3. Click Save
4. Wait 2-3 minutes for deployment

**If content looks squished:**
- The iframe may need more height. Change `height="3500"` to a larger number like `height="4000"`

**If fonts don't look right:**
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- The fonts load from Google Fonts automatically

## Alternative: Direct Link
Instead of embedding, you can add a button that links to:
**https://yacnetadmin.github.io/GoGuide26/mission-trips.html**

---

Need help? Contact: mcarletti@yorkalliance.org
