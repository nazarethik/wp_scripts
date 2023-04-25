<?php
/**
 * Plugin Name: WooCommerce Every 3rd Product Free
 * Description: This plugin makes every 3rd product in the cart free.
 * Version: 1.0.0
 * Author: Nazarii
 */
 
add_action( 'woocommerce_cart_calculate_fees', 'free_third_product' );
function free_third_product( $cart ) {
    if ( is_admin() && ! defined( 'DOING_AJAX' ) ) return;
    $product_count = $cart->cart_contents_count;
  
    if ( $product_count < 3 ) return;
    $free_count = floor( $product_count / 3 );
    foreach ( WC()->cart->get_cart() as $cart_item ) {
        
        echo $cart_item['price'];
        
    }
    if ( $product_count % 3 != 0 ) {
        $free_count += 1;
    }
    $total_price = $cart->subtotal;
    
    // $discount = 0;
    // if ( $free_count > 0 ) {
    //     $average_price = $total_price / $product_count * 3;
    //     $discount = $average_price;
    // }
    
    // $cart->add_fee( __( '1 + 1 = 3', 'woocommerce' ), -$discount, true );
    // $cart->set_subtotal( $total_price - $discount );
}





