import Controller from '@ember/controller';

export default class ServicesStaffAugmentationUiuxDesignersController extends Controller {
  get uiUxtDesignersTitle() {
    return this.model.uiuxDesignersData.title;
  };


  get uiUxDesignersAbout() {
    return this.model.uiuxDesignersData.about;
  };

  get uiUxDesignerBg() {
    return this.model.uiuxDesignersData.bg;
  };

  get uiUxDesignerCircularList() {
    return this.model.uiuxDesignersData.circular_list;
  };

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
