<template>
  <header id="header">
    <nav id="header-nav">
      <ul>
        <router-link id="top-nav" to="/" exact><a>クラブ概要</a></router-link>
        <router-link id="price-nav" to="/price" exact><a>料金</a></router-link>
        <router-link id="staff-nav" to="/staff" exact><a>スタッフ紹介</a></router-link>
        <router-link  id="reserve-nav" to="/reserve"><a>予約</a></router-link>
        <router-link id="contact-nav" to="/contact"><a>お問い合わせ</a></router-link>
      </ul>
    </nav>
  </header>
</template>
