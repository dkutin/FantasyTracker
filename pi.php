<?php

include('ServiceCall.php');

$request = new ServiceCall();

$request->getRosterStats();
$request->getFreeAgentsStats();
