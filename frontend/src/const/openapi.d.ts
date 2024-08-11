/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/v1/blogs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * ブログ一覧の取得
         * @description ブログを全件取得する。
         */
        get: operations["get_blogs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/blogs/{blogId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                blogId: number;
            };
            cookie?: never;
        };
        /**
         * ブログの取得
         * @description ブログIDで指定されたブログを取得する。
         */
        get: operations["get_blogs_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/stampboard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * スタンプボードの取得
         * @description スタンプボードのブログ記事を取得する
         */
        post: operations["get_stampboard"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/blogs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * ブログの作成
         * @description ブログを作成する
         */
        post: operations["post_blog"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/blogs/{blogId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                blogId: number;
            };
            cookie?: never;
        };
        get?: never;
        /**
         * ブログの編集
         * @description ブログの編集を行う
         */
        put: operations["put_blog"];
        post?: never;
        /**
         * ブログの削除
         * @description ブログの削除を行う
         */
        delete: operations["delete_blog"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/admin/upload/image": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 画像のアップロード
         * @description 画像のアップロードを行う
         */
        post: operations["upload_image"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        StudentVoice: {
            /** @example 1 */
            id?: number;
            /** @example 2024 */
            academic_year?: string;
            /** @example 学生の声 */
            description?: string;
        };
        Blog: {
            /** @example 1 */
            id?: number;
            /** @example スタンプボード上に表示される名称 */
            nick_name?: string;
            /** @example ブログタイトル */
            place_name?: string;
            points?: string[];
            /** @example もっと詳しく */
            more_description?: string;
            student_voices?: components["schemas"]["StudentVoice"][];
            /** @example 住所 */
            address?: string;
            /** @example [
             *       "/img/a.jpg",
             *       "/img/b.jpg"
             *     ] */
            images?: string[];
            /** @example metaタグのdescription */
            meta_description?: string;
            /** @example metaタグのog:description */
            meta_og_description?: string;
            /** @example metaタグのkeywords */
            meta_keywords?: string;
        };
        Blogs: {
            blogs?: components["schemas"]["Blog"][];
        };
        StampboardItem: {
            /** @example 1 */
            id?: number;
            /** @example スタンプ上の名称 */
            nick_name?: string;
        };
        Stampboard: {
            stampboard?: components["schemas"]["StampboardItem"][];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    get_blogs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "Access-Control-Allow-Origin"?: string;
                    Connection?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Blogs"];
                };
            };
        };
    };
    get_blogs_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                blogId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Blog"];
                };
            };
        };
    };
    get_stampboard: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    exclude_ids?: number[];
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Stampboard"];
                };
            };
        };
    };
    post_blog: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Blog"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["Blog"];
                    };
                };
            };
        };
    };
    put_blog: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                blogId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Blog"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["Blog"];
                    };
                };
            };
        };
    };
    delete_blog: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                blogId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
    upload_image: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    filename?: string;
                    /** Format: binary */
                    file?: string;
                    blog_id?: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    };
}
