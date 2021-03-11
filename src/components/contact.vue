<template>
  <div>
    <div class="contact"><h2>お問い合わせ</h2></div>
    <div>
      <form action="confirm.php" method="post" name="form" onsubmit="return validate()">
        <div>
          <div>
            <span>お名前</span>
            <input v-model="name" />
          </div>
          <div>
            <span>メールアドレス</span>
            <input v-model="email" />
          </div>
          <div>
            <span>お問い合わせ内容</span>
            <p style="white-space: pre-line;">{{ message }}</p>
            <textarea v-model="message"></textarea>
          </div>
        </div>
        <button class="btn btn-primary">入力内容を確認する</button>
      </form>
    </div>
  </div>
</template>

<script>

</script>
