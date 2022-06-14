export interface MuscleGroup {
    name: string
}

export interface Exercise {
    name: string,
    description: string,
    group: MuscleGroup
}