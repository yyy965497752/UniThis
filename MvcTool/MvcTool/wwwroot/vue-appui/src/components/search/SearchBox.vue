<template>
  <form role="search">
    <div class="input-group input-group-lg">
      <input class="form-control" id="search-text-box" maxlength="500" placeholder="Search..." role="combobox" tabindex="200" aria-haspopup="false" aria-autocomplete="both" autocomplete="off" spellcheck="false" type="text">
      <div class="input-group-btn">
        <button class="btn btn-primary" type="submit">Search</button>
      </div>
    </div>
  </form>
</template>

<style>
.MJF62LC-g-m,
.MJF62LC-g-h,
.MJF62LC-g-D,
.MJF62LC-g-z {
    background-color: #f6f6f6;
}

.MJF62LC-g-C {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}

.MJF62LC-g-C {
    border-radius: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    height: 100%;
    margin: 0 auto;
    max-width: 1032px;
    min-width: 338px;
    width: 100%;
}

.MJF62LC-g-C,
.MJF62LC-g-n {
    background-color: #fff;
}

.MJF62LC-g-D form {
    position: relative;
    width: 100%;
}

.MJF62LC-g-n {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);
    -moz-box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);
    box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);
}

.MJF62LC-g-A {
    opacity: .54;
    padding: 8px;
    position: absolute;
    top: 0;
}

.MJF62LC-x-d {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

/*! Search cell */
.sbib_a {
    background: #fff;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}

.sbib_b {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    padding: 5px 9px 0;
}

.sbib_b {
    padding: 0 !important;
}

.sbib_b {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    padding: 5px 9px 0;
}

.MJF62LC-g-n input[type="text"] {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    cursor: text;
    font-size: 16px;
    height: 40px !important;
    line-height: 32px !important;
    padding: 0 42px !important;
}

/*! Separator */
.MJF62LC-g-z {
    display: block;
    min-width: 18px;
    width: 18px;
}

.MJF62LC-q-t {
    -moz-box-align: center;
    -webkit-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    display: none;
    height: 40px;
    margin: 0;
    position: relative;
    width: 100%;
}

.MJF62LC-q-k {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);
    -moz-box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);
    box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);
}

.MJF62LC-q-t {
    background-color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 5px;
    display: block;
    -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);
    -moz-box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);
    box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);
    max-width: calc(50% - 9px);
}

.active .MJF62LC-q-t {
    display: block;
}

input.MJF62LC-q-j[type="text"] {
    background-color: transparent;
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    cursor: text;
    font-size: 16px;
    height: 100%;
    line-height: 32px;
    color: #fff;
    color: rgba(255,255,255,1);
    padding-left: 40px;
    padding-right: 40px;
    position: relative;
    width: 100%;
}

</style>
