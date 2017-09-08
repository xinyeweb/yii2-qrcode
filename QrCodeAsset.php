<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/8
 * Time: 21:07
 */

namespace xinyeweb\qrcode;


use yii\web\AssetBundle;
use yii\web\JqueryAsset;

class QrCodeAsset extends AssetBundle
{
    public $js = [
        'jquery.qrcode.js',
        'utf.js',

    ];
    public $css = [
    ];
    public $depends = ['yii\web\JqueryAsset'];

    public function init()
    {
        $this->sourcePath = dirname(__FILE__).DIRECTORY_SEPARATOR . 'assets';
    }
}