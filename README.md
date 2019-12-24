# Talentlms

Nodejs implementation for the [Talent LMS API](http://www.talentlms.com):
A super-easy, cloud LMS software to train your employees, partners and customers

## Status

[![Build Status](https://secure.travis-ci.org/tylermercier/talentlms.png)](http://travis-ci.org/tylermercier/talentlms)
[![Code Climate](https://codeclimate.com/github/tylermercier/talentlms.png)](https://codeclimate.com/github/tylermercier/talentlms)

## Installation

Add this line to your application's Gemfile:

    ```npm i talentlms -g```

## Usage
    ```
    const TalentLMS = require('./TalentLMS');
    const tl = new TalentLMS('exmaple.talentlms.com', 'apiKey');

    tl.Users.getUsers()

    tl.Users.getUserById(id)

    tl.Users.getUserByEmail(email)

    tl.Users.setStatus(userId, status)
    ```
## Documentation

