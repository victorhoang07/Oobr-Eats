import React, {useEffect} from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginModal from "./login_modal";
import LogoutModal from './logout_modal';
import SearchModal from './search_modal';
import CartModal from './cart_modal';
import MenuItemModal from "./menu_item_modal"

function Modal({ modal, closeModal }) {

    if (!modal) {
        return null;
    }

    // useEffect(() => {
    //     const menu = document.querySelector(".modal-child")
    //     menu.classList.add('modal-open')
    // }, [])

    let side;
    let component;
    switch (modal.type) {
        case 'login':
            component = <LoginModal />;
            side = "modal-child"
            break;
        case 'main':
            component = <LogoutModal />;
            side = 'modal-child'
            break;
        case 'search':
            component = <SearchModal />;
            side = 'search-child'
            break;
        case 'cart':
            component = <CartModal />;
            side = 'cart-child'
            break;
        case 'menuItem':
            component = <MenuItemModal itemId={modal.itemId} restaurantId={modal.restaurantId}/>
            side = 'middle'
            break;    
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className={side} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);