<?php

class TestContents
{

    public static function load($app)
    {
        $app->options('/test/contents', function() use($app) {
            $response = $app->response();

            unset($response['Content-Type']);
        });

        $app->post('/test/contents', function() use($app) {

            $response = $app->response();
            $response['Content-Type'] = 'application/json';

            $path = $app->request->post('path');
            $path = '../tests'.$path;

            $body = array(
                'html' => '',
                'css' => '',
                'js' => '',
                'path' => $path,
            );

            if (is_file($path.'/index.html'))
            {
                $body['html'] = file_get_contents($path.'/index.html');
            }
            if (is_file($path.'/style.css'))
            {
                $body['css'] = file_get_contents($path.'/style.css');
            }
            if (is_file($path.'/script.js'))
            {
                $body['js'] = file_get_contents($path.'/script.js');
            }

            $response->body(json_encode($body));
        });
    }
}
