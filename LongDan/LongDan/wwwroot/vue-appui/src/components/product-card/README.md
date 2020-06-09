# Product Card
Product Card is a component used in shop-related views.

## Usage

```html
<div class="card product-card">
  <div class="product-card__image-wrapper">
    <img class="card-img product-card__image" src="" alt="">
  </div>
  <div class="card-body product-card__content">
    <div class="card-title product-card__title"></div>
    <div class="product-card__price"></div>
    <div class="product-card__description"></div>
    <div v-if="rating">
      <review-stars
        :rating="rating">
      </review-stars>
    </div>
  </div>
</div>
```
