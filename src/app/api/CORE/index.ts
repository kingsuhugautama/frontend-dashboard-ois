import * as SETUP_USER from './SETUP_USER';
import * as SETUP_ROLE from './SETUP_ROLE';
import * as SETUP_MAIN_MENU from './SETUP_MAIN_MENU';
import * as SETUP_SIDEBAR_MENU from './SETUP_SIDEBAR_MENU';
import * as SETUP_FIELD_GRID from './SETUP_FIELD_GRID';
import * as SETUP_BUTTON from './SETUP_BUTTON';

export const API_CORE = Object.assign({},
    {
        SETUP_USER: SETUP_USER,
        SETUP_ROLE: SETUP_ROLE,
        SETUP_MAIN_MENU: SETUP_MAIN_MENU,
        SETUP_SIDEBAR_MENU: SETUP_SIDEBAR_MENU,
        SETUP_FIELD_GRID: SETUP_FIELD_GRID,
        SETUP_BUTTON: SETUP_BUTTON,
    }
)
