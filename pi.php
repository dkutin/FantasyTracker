<?php

include(__DIR__ . '/ServiceCall.php');

$request = new ServiceCall();

$request->getRosterStats();
$request->getFreeAgentsStats();
