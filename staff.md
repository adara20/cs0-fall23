---
layout: page
title: Staff
description: A listing of all the course staff members.
---

# Staff

This page is still getting updated. Please check back in a few days for the full list. In the meantime, please feel free to reach out to your instructor. 

## Instructors

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{% assign howard_teaching_assistants = site.staffers | where: 'role', 'Howard Teaching Assistant' %}
{% assign num_howard_teaching_assistants = howard_teaching_assistants | size %}
{% if num_howard_teaching_assistants != 0 %}
## Howard Teaching Assistants

{% for staffer in howard_teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

{% assign google_teaching_assistants = site.staffers | where: 'role', 'Google Teaching Assistant' %}
{% assign num_google_teaching_assistants = google_teaching_assistants | size %}
{% if num_google_teaching_assistants != 0 %}
## Google Teaching Assistants

{% for staffer in google_teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}
