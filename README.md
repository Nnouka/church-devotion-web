# Church Devotion Web

* A minister creates a congregation

* A minister adds user to congregations

* A user can create a devotional and schedule it

* A user can check a pulse from a devotional

* A user can comment on a pulse from a devotional

* A user can indicate if a pulse was relevant or not

* A user can send a commitment request to be added to a congregation

* A minister can accept a commitment request, this automatically adds the user to the congregation

* A minister can reject a commitment request

* A minister can generate an invite link

* A minister can send an invite link to any user

* A user can click on the invite link and be added to the congregation


A devotional has a duration. If a devotional has a duration of n days, then it must have n pulses.
A pulse has a title, an exhortation, some scripture references, some prayer points.
Scripture reference is book, chapter and verse
Prayer point is, an issue and God’s answer

## Up and Running

To get started:

* install all project dependencies with `npm install`
* start the development server with `npm start` or `yarn start`

## Test credentials

1. username: admin@devotion.com, pass: 12345678
2. username: user@devotion.com, pass: 12345678