<?php
date_default_timezone_set('Asia/Singapore');
$date = date('Y-m-d', strtotime('+5 days'));
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="showTimer">
    <meta name="author" content="Ratinan Lee">
    <title>ShowTimer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <style>
      #wrapper2, #wrapper3 {
        text-align: center;
      }
      .countdown_box {
        border: 1px solid black;
        border-radius: 2px;
        display: inline-block;
        margin-right: 5px;
        padding: 3px;
        text-align: center;
        width: 80px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>showTimer</h1>
          <h2>Included JS</h2>
          <pre>
&lt;script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;script src="src/showTimer.min.js"&gt;&lt;/script&gt;
          </pre>

          <h2>Test 1</h2>
          <p class="fw-bold">Result:</p>
          <div id="wrapper1">EXPIRES IN <span id="test1" data-start="2021-01-01T00:00:00" data-end="<?=$date?>T00:00:00" data-timezone="+08:00"></span></div>
          <p class="fw-bold">Code:</p>
          <pre>
&lt;div id="wrapper1"&gt;EXPIRES IN &lt;span id="test1" data-start="2021-01-01T00:00:00" data-end="<?=$date?>T00:00:00" data-timezone="+08:00"&gt;&lt;/span&gt;&lt;/div&gt;
&lt;script&gt;$('#test1').showTimer({returnType: "text", wrapper_id: "wrapper1"});&lt;/script&gt;
          </pre>

          <h2>Test 2</h2>
          <p class="fw-bold">Result:</p>
          <div id="wrapper2">EXPIRES IN <div id="test2" data-start="2021-01-01T00:00:00" data-end="<?=$date?>T00:00:00" data-timezone="+08:00"></div></div>
          <p class="fw-bold">Code:</p>
          <pre>
&lt;div id="wrapper2"&gt;EXPIRES IN &lt;div id="test2" data-start="2021-01-01T00:00:00" data-end="<?=$date?>T00:00:00" data-timezone="+08:00"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;script&gt;$('#test2').showTimer({returnType: "box", wrapper_id: "wrapper2"});&lt;/script&gt;
          </pre>

          <h2>Test 3</h2>
          <p class="fw-bold">Result:</p>
          <div id="wrapper3">EXPIRES IN <div id="test3" data-start="2021-01-01T00:00:00" data-end="<?=$date?>T00:00:00" data-timezone="+08:00"></div></div>
          <p class="fw-bold">Code:</p>
          <pre>
&lt;div id="wrapper3"&gt;EXPIRES IN &lt;div id="test3" data-start="2021-01-01T00:00:00" data-end="<?=$date?>T00:00:00" data-timezone="+08:00"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;script&gt;
$('#test3').showTimer({
    'returnType': 'box',
    'wrapper_id': 'wrapper3',
    'local_s_days': 'วัน',
    'local_s_hrs': 'ช.ม.',
    'local_s_min': 'นาที',
    'local_s_sec': 'วิ',
    'local_l_days': 'วัน',
    'local_l_hrs': 'ชั่วโมง',
    'local_l_min': 'นาที',
    'local_l_sec': 'วินาที',
});
&lt;/script&gt;
</pre>
        </div>
      </div>
    </div>
  </body>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="src/showTimer.min.js"></script>
  <script>
    $(function () {
      // TEST
      $('#test1').showTimer({returnType: "text", wrapper_id: "wrapper1"});
      $('#test2').showTimer({returnType: "box", wrapper_id: "wrapper2"});
      $('#test3').showTimer({
        'returnType': 'box',
        'wrapper_id': 'wrapper3',
        'local_s_days': 'วัน',
        'local_s_hrs': 'ช.ม.',
        'local_s_min': 'นาที',
        'local_s_sec': 'วิ',
        'local_l_days': 'วัน',
        'local_l_hrs': 'ชั่วโมง',
        'local_l_min': 'นาที',
        'local_l_sec': 'วินาที',
      });
    });
  </script>
</html>