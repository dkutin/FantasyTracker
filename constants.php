<?php

/*
*   Configurable Constants
*/

define('CONSUMER_KEY', 'dj0yJmk9dWVMT3V2MU9SZGUzJmQ9WVdrOVJIWklVM3BMTXpBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWVm');
define('CONSUMER_SECRET', '42e262e98287f3fca465fa227b2344d62a140971');
define('LEAGUE_KEY', 'nba.l.128774');
define('TEAM_ID', '4');
define('FREE_AGENTS_MAX', 50);
static $scored_stats = [
    '12' => 1,      //PTS
    '15' => 1.2,    //REB
    '16' => 1.5,    //AST
    '17' => 3,      //BLK
    '18' => 3,      //STL
    '19' => -1,     //TO
];

/*
 *  Non-Configurable Constants
 */

define('AUTH_ENDPOINT', 'https://api.login.yahoo.com/oauth2/get_token');

