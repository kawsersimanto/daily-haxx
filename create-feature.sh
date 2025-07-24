#!/bin/bash

# Usage: ./create-feature.sh polls articles newsletter

# Exit if no argument
if [ $# -eq 0 ]; then
  echo "Please provide at least one feature name."
  exit 1
fi

# Loop through all arguments
for arg in "$@"; do
  # Normalize to lowercase and PascalCase
  feature=$(echo "$arg" | tr '[:upper:]' '[:lower:]')
  FeaturePascal=$(echo "$feature" | sed -r 's/(^|_)([a-z])/\U\2/g')

  # Paths
  base="src/features/$feature"
  components="$base/components"
  hooks="$base/hooks"
  store="$base/store"

  # Create folder structure
  mkdir -p "$components" "$hooks" "$store"

  # Create files
  cat <<EOF > "$components/${FeaturePascal}Card.tsx"
export default function ${FeaturePascal}Card() {
  return <div>${FeaturePascal}Card</div>;
}
EOF

  cat <<EOF > "$hooks/use${FeaturePascal}.ts"
export function use${FeaturePascal}() {
  // React Query hook logic here
  return {};
}
EOF

  cat <<EOF > "$store/${feature}Store.ts"
import { create } from "zustand";

interface ${FeaturePascal}State {
  // state
}

export const use${FeaturePascal}Store = create<${FeaturePascal}State>(() => ({
  // initial state
}));
EOF

  cat <<EOF > "$base/api.ts"
export async function get${FeaturePascal}() {
  // API logic here
}
EOF

  cat <<EOF > "$base/types.ts"
export interface ${FeaturePascal} {
  id: string;
  // define fields
}
EOF

  echo "Feature '$feature' structure created successfully."
done
