<?php
include ('ServiceCall.php');
include ('Analytics.php');

// Initialize Objects needed to generate report
$request = new ServiceCall();
$analysis = new Analytics();

// deleteAllFromFolder();
// Request Free Agent and Roster Statistics
$request->getFreeAgentsStats();
$request->getRosterStats();
// TODO: Delete Player info from old roster players data/players/roster
// Generate report
//$data = $analysis->generateReport();
$data = "";

// Create seven day player averages
foreach ($analysis->getSevenDayAverage('Roster') as $week => $players) {
    foreach ($players as $player => $average) {
        $data .= "7 Day Average Week ${week} | ${player} change ${average}" . PHP_EOL;
    }
}

$data .= PHP_EOL . PHP_EOL;

foreach ($analysis->getFourteenDayAverage('Roster') as $week => $players) {
    foreach ($players as $player => $average) {
        $data .= "14 Day Average Week ${week} | ${player} change ${average}" . PHP_EOL ;
    }
}

sendEmail('dmitrykutin@outlook.com', $data);

