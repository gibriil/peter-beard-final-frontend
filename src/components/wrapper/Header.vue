<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-brand to="/">
        <img :src="require(`@/assets/tnt-white.png`)" height="60" width="60" aria-hidden="true" />Tunnels &amp; Trolls
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/character">Character Sheets</b-nav-item>
          <b-nav-item to="/gm-guide/spells">GM Guide</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>