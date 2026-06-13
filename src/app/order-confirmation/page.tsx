// Virion template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function OrderConfirmationPage() {
  return (
    <>
      <div className="checkout-form">
      <div className="container large-container checkout-layout">
      <div className="checkout-main">
      <div className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Customer Information
                        </h3>
      </div>
      <fieldset className="block-content">
      <div>
      <div>
      <div>
      <label>
                                Email
                              </label>
      <div>
      </div>
      </div>
      </div>
      <div>
      <div>
      <label>
                                Shipping Address
                              </label>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      </div>
      <div>
      </div>
      </div>
      </div>
      </div>
      </fieldset>
      </div>
      <div className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Shipping Method
                        </h3>
      </div>
      <fieldset className="block-content">
      <div>
      <div>
      <div>
      <div>
      </div>
      <div>
      </div>
      </div>
      </div>
      </div>
      </fieldset>
      </div>
      <div className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Payment Info
                        </h3>
      </div>
      <fieldset className="block-content">
      <div>
      <div>
      <div>
      <label>
                                Payment Info
                              </label>
      <div>
      <div>
      </div>
      <div>
      </div>
      </div>
      <div>
      <div>
      </div>
      <div>
                                  /
                                </div>
      <div>
      </div>
      </div>
      </div>
      </div>
      <div>
      <div>
      <label>
                                Billing Address
                              </label>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      </div>
      <div>
      </div>
      </div>
      </div>
      </div>
      </fieldset>
      </div>
      <div className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Items in Order
                        </h3>
      </div>
      <fieldset className="block-content">
      <div data-checkout-items="1" role="list">
      </div>
      </fieldset>
      </div>
      </div>
      <div className="checkout-aside">
      <div className="checkout-block">
      <div className="block-header">
      <h3 className="customer-info">
                          Order Summary
                        </h3>
      </div>
      <fieldset className="block-content">
      <div>
      <div>
                            Subtotal
                          </div>
      <div data-checkout-subtotal="1">
      </div>
      </div>
      <div>
      <div>
      <div>
      </div>
      <div>
      </div>
      </div>
      </div>
      <div>
      <div>
                            Total
                          </div>
      <div data-checkout-total="1">
      </div>
      </div>
      </fieldset>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
