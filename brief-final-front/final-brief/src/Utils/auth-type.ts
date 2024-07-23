export type LoginProps = {
    email: string,
    password: string
}

export type RegisterProps = {
    name: string,
    email: string,
    password: string
}

export type UserProps = {
        id: string,
        name: string,
        email: string,
        Role: string,
        isActive: boolean,
        gdpr: string,
        created_at: string,
        updated_at: string
}