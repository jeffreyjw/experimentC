<?php

class TestStructure
{
    private static $id = 0;

    private static function nextId()
    {
        return self::$id++;
    }


    private static function getFileSystemStructure($path, $allParents = '')
    {
        $array = array();
        $handle = opendir($path);

        while (($entry = readdir($handle)) !== false)
        {
            if ($entry == '.' || $entry == '..')
                continue;

            if ($entry == 'index.html')
            {
                $array[] = array( 'testEntry' => true );
                continue;
            }

            if (is_dir($path.'/'.$entry))
            {
                $element = array(
                    'id' => self::nextId(),
                    'label' => $entry,
                    'test' => false,
                    'path' => $allParents.'/'.$entry
                );
                $element['children'] = self::getFileSystemStructure($path.'/'.$entry, $allParents.'/'.$entry);

                for ($i = 0; $i < count($element['children']); ++$i)
                {
                    if (array_key_exists('testEntry', $element['children'][$i]))
                    {
                        $element["test"] = true;
                        unset($element['children'][$i]);
                        break;
                    }
                }

                $array[] = $element;
            }
        }

        return $array;
    }

    public static function load($app)
    {
        $app->get('/test/structure', function() use($app) {

            $response = $app->response();
            $response['Content-Type'] = 'application/json';

            $body = TestStructure::getFileSystemStructure('../tests');

            $response->body(json_encode($body));
        });
    }
}
