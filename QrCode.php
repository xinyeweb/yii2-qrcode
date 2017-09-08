<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/8
 * Time: 21:08
 */

namespace xinyeweb\qrcode;


use yii\base\Widget;
use yii\helpers\Html;
use yii\helpers\Json;

class QrCode extends Widget
{
    public $options = []; // 标签的属性
    public $clientOptions = []; //二维码的属性
    private $_codeOptions = [
        'render' =>  "canvas",//table | canvas,
        'text' => "http://www.xinyeweb.com",
        'width' => 200,
        'height' => 200,
        'background' => '#ffffff',
        'foreground' => '#000000',
        'src' => ''
    ];
    public $tag = 'div';

    public function init(){
        if (!isset($this->options['id'])) {
            $this->options['id'] = $this->getId();
        }
        QrCodeAsset::register($this->getView());
        $this->registerScript();
    }

    public function run()
    {
        echo Html::tag($this->tag,'',$this->options);
    }

    public function registerScript(){
        $config = array_merge($this->_codeOptions, $this->clientOptions);
        $config = Json::htmlEncode($config);
        $js = "jQuery('#{$this->options["id"]}').qrcode('{$config}')";
        $this->getView()->registerJs(implode(PHP_EOL, $js));
    }
}