export interface PackageDependencyHierarchy {
  name: string
  version: string
  path: string
  private: boolean
  dependencies?: Record<string, any>
  devDependencies?: Record<string, any>
  optionalDependencies?: Record<string, any>
  unsavedDependencies?: Record<string, any>
}
