Jq Qrcode For Yii2
==================
Jq Qrcode For Yii2

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist xinyeweb/yii2-qrcode "*"
```

or add

```
"xinyeweb/yii2-qrcode": "*"
```

to the require section of your `composer.json` file.


Usage
-----

Once the extension is installed, simply use it in your code by  :

```php
<?= \xinyeweb\qrcode\QrCode::widget([
    'options' => [
        'id' => 'my-qrcode',
        'class' => 'qrcode-class'
    ],
    'clientOptions' => [
        'render' => 'table',
        'text' => 'http://www.autozh.com'    
    ]
]) ?>
```