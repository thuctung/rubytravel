import Image from "next/image"

const Header = () => {
    return <div className="padding-common">
        <div className="">
            <Image src="/logo.jpg" width={90} height={90} alt="logo" />
        </div>
        <div>

            <ul className="header-nav header-nav-main nav nav-right  nav-divided nav-size-medium nav-uppercase">
                <li id="menu-item-708" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-98 current_page_item menu-item-708 active menu-item-design-default"><a href="https://asiabooking.vn/" aria-current="page" className="nav-top-link">Trang chủ</a></li>
                <li id="menu-item-2372" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2372 menu-item-design-default has-dropdown"><a href="/danh-muc/du-lich" className="nav-top-link" aria-expanded="false" aria-haspopup="menu">Tour Du lịch<i className="icon-angle-down"></i></a>
                </li>
                <li id="menu-item-2514" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-2514 menu-item-design-default has-dropdown"><a href="https://asiabooking.vn/danh-muc/ve-khu-vui-choi" className="nav-top-link" aria-expanded="false" aria-haspopup="menu">Đặt vé khu vui chơi<i className="icon-angle-down"></i></a>
                </li>
                <li id="menu-item-2380" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2380 menu-item-design-default"><a href="https://asiabooking.vn/danh-muc/khach-san" className="nav-top-link">Khách sạn</a></li>
                <li id="menu-item-4357" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-4357 menu-item-design-default"><a href="https://asiabooking.vn/danh-muc/villa" className="nav-top-link">Villa</a></li>
                <li id="menu-item-2544" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2544 menu-item-design-default"><a href="https://asiabay.sbay.com.vn/" className="nav-top-link">Vé máy bay</a></li>
                <li id="menu-item-2543" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2543 menu-item-design-default"><a href="https://asiabooking.vn/danh-muc/spa-massage" className="nav-top-link">Spa Massage</a></li>
                <li id="menu-item-2542" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2542 menu-item-design-default"><a href="https://asiabooking.vn/danh-muc/dat-xe" className="nav-top-link">Đặt xe</a></li>
               
            </ul>
        </div>
    </div>
}

export default Header