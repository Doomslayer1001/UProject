<?php
    function getCache($file) {
        if (file_exists($file)) {
            return json_decode(file_get_contents($file), true);
        }
        return null;
    }

    function setCache($file, $data) {
        file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
    }

    function clearCache() {
        array_map('unlink', glob("../cache/*.json"));
    }
?>