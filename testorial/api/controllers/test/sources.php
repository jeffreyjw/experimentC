<?php

class TestSources
{
    public static function load($app)
    {
        $app->get('/test/sources', function() use($app) {

            $response = $app->response();
            $response['Content-Type'] = 'application/json';

            $body = array();

            $response->body(json_encode($body));
        });
    }
}
