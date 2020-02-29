<?php
include('ServiceCall.php');
include ('Analytics.php');

// Initialize Objects needed to generate report
$request = new serviceCall();
$analysis = new Analytics();

// deleteAllFromFolder();
// Request Free Agent and Roster Statistics
$request->getFreeAgentsStats();
// TODO: Delete Player info from old roster players data/players/roster
$data = "";

// Create seven day player averages
foreach ($analysis->getSevenDayAverage('FA') as $week => $players) {
    foreach ($players as $player => $average) {
        $data .= "7 Day Average Week ${week} | ${player} change ${average}</br>" . PHP_EOL;
    }
}

$data .= "</br>";

// Create fourteen day player averages
foreach ($analysis->getFourteenDayAverage('FA') as $week => $players) {
    foreach ($players as $player => $average) {
        $data .= "14 Day Average Week ${week} | ${player} change ${average}</br>" . PHP_EOL ;
    }
}

// TODO: We can maybe serialize this and save as JSON or in db??

print ($data);
