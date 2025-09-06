class BaseSignPage {
  constructor(page) {
    this.page = page;
    
    // Common navigation elements
    this.backToHomeLink = page.getByRole('link', { name: 'Back to Homepage' });
    
    // Common header elements
    this.paydoLogo = page.locator('img[alt="Paydo logo"]');
    this.accountTypeLabel = page.locator('.auth-slider-content__account-type');

    // Initialize common slider elements
    this.slider = page.locator('ngp-gallery-slider.auth-slider-content__slider');
    this.sliderItems = page.locator('ngp-gallery-slider-item.auth-slide');
    this.sliderImages = page.locator('.auth-slide__image');
    this.sliderTitles = page.locator('.ngp-slider-item__title div');
    this.sliderDescriptions = page.locator('ngp-gallery-slider-item-description');
    this.sliderPagination = page.locator('.ngp-gallery-slider__pagination');
    this.sliderPaginationBullets = page.locator('.swiper-pagination__bullet');
    this.activePaginationBullet = page.locator('.swiper-pagination__bullet--active');
  }
}
export { BaseSignPage };
