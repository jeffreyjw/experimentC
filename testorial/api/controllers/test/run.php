<?php

class TestRun
{
    public static function load($app)
    {

        $app->options('/test/run', function() use($app) {
            $response = $app->response();

            unset($response['Content-Type']);
        });

        $app->post('/test/run', function() use($app) {
            $html = $app->request->post('html');
            $css = $app->request->post('css');
            $js = $app->request->post('js');

            $dom = new DOMDocument();
            $dom->loadHTML($html);

            $style = $dom->createElement('style', $css);
            $script = $dom->createElement('script', $js);

            $head = $dom->getElementsByTagName('head')->item(0);
            if ($head)
            {
                $firstChild = $head->firstChild;

                $qunitCss = $dom->createElement('link');
                $qunitCss->setAttribute('rel', 'stylesheet');
                $qunitCss->setAttribute('href', '//code.jquery.com/qunit/qunit-1.14.0.css');
                $head->insertBefore($qunitCss, $firstChild);

                $qunitScript = $dom->createElement('script', '');
                $qunitScript->setAttribute('src', '//code.jquery.com/qunit/qunit-1.14.0.js');
                $head->insertBefore($qunitScript, $firstChild);

                $blanketScript = $dom->createElement('script', '');
                $blanketScript->setAttribute('src', '/testorial/blanket/blanket.js');
                $blanketScript->setAttribute('data-cover-reporter', '/testorial/blanket/blanket_reporters/json.js');
                $head->insertBefore($blanketScript, $firstChild);

                $head->appendChild($style);
            }

            $body = $dom->getElementsByTagName('body')->item(0);
            if ($body)
            {
                $qunit = $dom->createElement('div', '');
                $qunit->setAttribute('id', 'qunit');
                $body->appendChild($qunit);

                $qunitFixture = $dom->createElement('div', '');
                $qunitFixture->setAttribute('id', 'qunit-fixture');
                $body->appendChild($qunitFixture);

                $body->appendChild($script);
            }

            echo $dom->saveHTML();
        });
    }
}