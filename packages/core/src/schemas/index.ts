/**
 * @module @minions-sprints/sdk/schemas
 * Custom MinionType schemas for Minions Sprints.
 */

import type { MinionType } from 'minions-sdk';

export const sprintType: MinionType = {
  id: 'sprints-sprint',
  name: 'Sprint',
  slug: 'sprint',
  description: 'A time-boxed iteration for an IT project.',
  icon: '🏃',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'number', type: 'number', label: 'number' },
    { name: 'startDate', type: 'string', label: 'startDate' },
    { name: 'endDate', type: 'string', label: 'endDate' },
    { name: 'goal', type: 'string', label: 'goal' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'plannedPoints', type: 'number', label: 'plannedPoints' },
    { name: 'completedPoints', type: 'number', label: 'completedPoints' },
  ],
};

export const sprintretrospectiveType: MinionType = {
  id: 'sprints-sprint-retrospective',
  name: 'Sprint retrospective',
  slug: 'sprint-retrospective',
  description: 'Lessons from a completed sprint.',
  icon: '🔄',
  schema: [
    { name: 'sprintId', type: 'string', label: 'sprintId' },
    { name: 'wentWell', type: 'string', label: 'wentWell' },
    { name: 'needsImprovement', type: 'string', label: 'needsImprovement' },
    { name: 'actionItems', type: 'string', label: 'actionItems' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const customTypes: MinionType[] = [
  sprintType,
  sprintretrospectiveType,
];

