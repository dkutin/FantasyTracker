<?php

include(__DIR__ . '/ServiceCall.php');
include (__DIR__ . '/Analytics.php');

$request = new ServiceCall();
$analytics = new Analytics();

$request->getRosterStats();
$request->getFreeAgentsStats();
$analytics->generateReport();

