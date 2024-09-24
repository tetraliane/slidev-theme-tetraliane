---
theme: ./

layout: intro
---

# slidev-theme-tetraliane

::info::

By @tetraliane

<div class="pt-32 text-right">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# Layouts

This theme includes the following layouts:

- **default** -- The most basic layout
- **intro** -- To introduce the presentation, usually contains the presentation title
- **section** -- Used to mark the beginning of a new presentation section
- **two-cols** -- Separates the page in two columns.

---
layout: section
---

# Features

::info::

`slidev-theme-tetraliane` has many features.

---
layout: two-cols
---

# Two-column layout

This is the left pane.

::right::

```md
---
layout: two-cols
---

# Two-column layout

This is the left pane.

::right::

This paragraph is shown in the right side.
```
