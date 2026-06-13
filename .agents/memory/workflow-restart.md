---
name: Workflow restart method for artifact-managed workflows
description: The restart_workflow tool consistently fails for artifact-managed web workflows; use restartWorkflow callback instead.
---

## Rule
For artifact-managed workflows (created via `createArtifact`), always use the `restartWorkflow` callback from `code_execution` instead of the `restart_workflow` tool.

```javascript
const result = await restartWorkflow({ workflowName: "artifacts/girls-gurukul: web", timeout: 30 });
```

## Why
The `restart_workflow` tool's internal health checker fails with `DIDNT_OPEN_A_PORT` for artifact-managed workflows on port 5173 (and possibly others), even when the Vite server starts correctly (HTTP 200 confirmed via curl). The `restartWorkflow` callback succeeds where the tool fails — it uses a different health check mechanism.

## How to apply
- Whenever restarting an artifact-managed workflow (girls-gurukul, api-server, mockup-sandbox), use the code_execution callback.
- If the callback also fails, check with `getWorkflowStatus` to see if the process is actually running.
- The `restart_workflow` tool MAY still be needed for non-artifact workflows.
