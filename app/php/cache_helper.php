<?php
    function getRedis() {
        $redis = new Redis();
        $redis->connect('cache', 6379);
        return $redis;
    }

    function getCache($key) {
        $redis = getRedis();
        $data = $redis->get($key);
        return $data ? json_decode($data, true) : null;
    }

    function setCache($key, $data, $ttl = 10) {
        $redis = getRedis();
        $redis->setex($key, $ttl, json_encode($data));
    }

    function clearCache() {
        $redis = getRedis();
        $redis->flushAll();
    }
?>