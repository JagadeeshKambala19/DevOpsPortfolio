# Branching Strategy

## Branch Roles

main → Production-ready code  
develop → Active development branch  
feature/* → Individual feature implementation  

## Workflow

1. Create a feature branch from `develop`
2. Implement the feature
3. Open a Pull Request targeting `develop`
4. CI pipeline validates the change
5. Merge only after CI passes

## Governance Rules

- Pull Requests are mandatory
- CI validation required before merging
- Semantic commit messages enforced