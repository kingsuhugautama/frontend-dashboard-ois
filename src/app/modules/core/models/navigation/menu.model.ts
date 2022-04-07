export interface MenuJsonModel {
    mainMenu: MainMenuModel[];
    topMenu: TopMenuModel[];
    sidebarMenu: SidebarMenuModel[];
}

export interface MainMenuModel {
    id_menu: number;
    is_parent?: boolean;
    id_menu_parent?: number;
    icon: string;
    icon_menu_parent?: string;
    caption: string;
    caption_menu_parent?: string;
    childMenu?: any[];
}

export interface TopMenuModel {
    id_menu: number
    caption: string
    id_menu_parent: number
    is_parent: boolean
    icon: string
}

export interface SidebarMenuModel {
    id_menu_sidebar: number;
    id_menu_sidebar_parent: number;
    id_top_menu: number;
    is_parent: boolean;
    icon: string;
    caption: string;
    url: string;
    sidebarChild?: SidebarChildMenuModel[];
    button?: ButtonModel[];
    fieldgrid?: FieldGridModel[];
}

export interface SidebarChildMenuModel {
    id_menu_sidebar: number;
    id_menu_sidebar_parent: number;
    is_parent: boolean;
    icon: string;
    caption: string;
    url: string;
    button?: ButtonModel[];
    fieldgrid?: FieldGridModel[];
}

interface ButtonModel {
    id_jenis_button: number;
    icon: string;
    icon2: string;
    caption: string;
    keterangan: string;
    stack_icon: string;
}

interface FieldGridModel {
    format_field: string;
    id_field_grid: number;
    id_menu_sidebar: number;
    keterangan: string;
    nama_asli_field: string;
    nama_header_text: string;
    tipe_field: string;
    width_field: number;
}

export interface MainMenu {
    Id: number;
    Name: string;
}

export interface ChildMenu {
    Id: number;
    Name: string;
    ParentId: number;
}

export interface SidebarMenu {
    ChildMenuId: number;
    SidebarMenu: Array<SidebarMenuItems>;
    Url?: string;
}

export interface SidebarMenuItems {
    Id: number;
    Name: string;
    Url: string;
}