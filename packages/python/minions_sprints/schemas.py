"""
Minions Sprints SDK — Type Schemas
Custom MinionType schemas for Minions Sprints.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

sprint_type = MinionType(
    id="sprints-sprint",
    name="Sprint",
    slug="sprint",
    description="A time-boxed iteration for an IT project.",
    icon="🏃",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="number", type="number", label="number"),
        FieldDefinition(name="startDate", type="string", label="startDate"),
        FieldDefinition(name="endDate", type="string", label="endDate"),
        FieldDefinition(name="goal", type="string", label="goal"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="plannedPoints", type="number", label="plannedPoints"),
        FieldDefinition(name="completedPoints", type="number", label="completedPoints"),
    ],
)

sprint_retrospective_type = MinionType(
    id="sprints-sprint-retrospective",
    name="Sprint retrospective",
    slug="sprint-retrospective",
    description="Lessons from a completed sprint.",
    icon="🔄",
    schema=[
        FieldDefinition(name="sprintId", type="string", label="sprintId"),
        FieldDefinition(name="wentWell", type="string", label="wentWell"),
        FieldDefinition(name="needsImprovement", type="string", label="needsImprovement"),
        FieldDefinition(name="actionItems", type="string", label="actionItems"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

custom_types: list[MinionType] = [
    sprint_type,
    sprint_retrospective_type,
]

