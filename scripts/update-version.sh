#!/bin/bash
echo "// automatically generated: do NOT edit" > src/version.ts
echo "export const version = \"$(LC_TIME=es_MX.UTF-8 date '+%d %b %Y')\"" >> src/version.ts