<?php

require 'vendor/autoload.php';

include 'controllers/test/structure.php';
include 'controllers/test/run.php';
include 'controllers/test/contents.php';
include 'controllers/test/sources.php';

$app = new \Slim\Slim(array(
    'debug' => true,
));

function cors($response)
{
    $response['Access-Control-Allow-Origin'] = '*';
    $response['Access-Control-Allow-Headers'] = 'Content-Type';
    $response['X-XSS-Protection'] = '0';
}

$response = $app->response();


cors($response);
TestStructure::load($app);
cors($response);
TestRun::load($app);
cors($response);
TestContents::load($app);
cors($response);
TestSources::load($app);

$app->run();
