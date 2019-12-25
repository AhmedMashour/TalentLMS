# Talentlms

Nodejs implementation for the [Talent LMS API](http://www.talentlms.com):
A super-easy, cloud LMS software to train your employees, partners and customers

## Status

[![Build Status](https://secure.travis-ci.org/tylermercier/talentlms.png)](http://travis-ci.org/tylermercier/talentlms)
[![Code Climate](https://codeclimate.com/github/tylermercier/talentlms.png)](https://codeclimate.com/github/tylermercier/talentlms)

## Installation

Run this command:

        npm i talentlms

## Usage
    
    const TalentLMS = require('talentlms');
    
    const tl = new TalentLMS('exmaple.talentlms.com', 'apiKey');

    tl.Users.getUsers()

    tl.Users.getUserById(id)

    tl.Users.getUserByEmail(email)

    tl.Users.setStatus(userId, status)

## [SDK Documentation](https://github.com/mashhour04/TalentLMS/blob/master/DOCUMENTATION.md)

## [TalentLMS API Documentation](https://www.talentlms.com/pages/docs/TalentLMS-API-Documentation.pdf)

