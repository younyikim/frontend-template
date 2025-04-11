#!/bin/bash

# 사용자에게 새로운 프로젝트 이름을 입력받음√
read -p "$(tput setaf 1)Enter the name of the new project : $(tput sgr0)" project_name

# 기본 경로를 현재 사용자의 홈 디렉토리로 설정
default_path=$(eval echo ~$USER)/Desktop

# 사용자에게 프로젝트를 생성할 경로를 입력받음 (기본값은 홈 디렉토리)
read -p "$(tput setaf 1)Enter the path where the project should be created (default: $default_path) : $(tput sgr0)" project_path

# 경로가 비어있으면 기본값 사용
if [ -z "$project_path" ]; then
  project_path="$default_path"
fi

# 새로운 프로젝트 경로
new_project_path="$project_path/$project_name"

# 프로젝트 경로가 존재하는지 확인하고, 없으면 생성
if [ ! -d "$new_project_path" ]; then
  mkdir -p "$new_project_path"
  echo "✅ Creating project at $(tput setaf 2)$new_project_path$(tput sgr0)"
else
  echo "⛔️ Directory $(tput setaf 2)$new_project_path$(tput sgr0) already exists. Aborting."
  exit 1
fi

template_folder="./templates/basic-nextjs"

# 템플릿 폴더를 새로운 경로로 복사 (node_modules 제외)
echo "✅ Copying $(tput setaf 2)$template_folder$(tput sgr0) to $(tput setaf 2)$new_project_path$(tput sgr0)"
rsync -av --exclude=node_modules "$template_folder/" "$new_project_path/"

# 복사가 완료되면 성공 메시지
echo "✅ Project template copied successfully to $(tput setaf 2)$new_project_path$(tput sgr0)"

# 새로운 프로젝트 폴더로 이동
cd "$new_project_path"

# Git 초기화
git init --initial-branch=main

# 새 GitLab 프로젝트의 Git URL 입력
read -p "$(tput setaf 1)Enter the GitLab repository URL (e.g., git@gitlab.com:your-username/new-project.git) : $(tput sgr0)" gitlab_repo_url

# 원격 레포지토리 추가
git remote add origin "$gitlab_repo_url"

git config --local user.name "younyikim"
git config --local user.email "rlakuku1221@gmail.com"

git add .
git commit -m "Initial commit"
git push --set-upstream origin main

echo -e "\n$(tput setaf 2)🎉 Project setup completed successfully!$(tput sgr0)"