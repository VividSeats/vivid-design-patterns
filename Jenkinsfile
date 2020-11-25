def GIT_CREDENTIALS='github-username-and-token-as-password'

pipeline {
  options {
    disableConcurrentBuilds()
  }
  agent {
    kubernetes {
      label 'vivid-design-patterns-2018-12-27-3'
      idleMinutes 2
      yamlFile 'jenkins/kubernetes/build-pod.yaml'
      inheritFrom 'base'
    }
  }

  environment {
    //
    // Don't remove BRANCH_LOWER. it is used in deploy-config.yaml file
    //
    BRANCH_LOWER = sh returnStdout: true, script: "echo ${ buildContext.branchName(env) } | awk '{print tolower(\$0)}' | tr -d '\n'"
  }

  stages {
    stage('Build Site') {
      steps {
        container('node') {
          sh 'yarn install'
          sh 'yarn run build:docs'
        }
      }
    }

    stage('Test') {
        steps {
            container('node') {
                sh 'yarn run test'
                sh 'yarn run lint:ci'
            }
        }
    }

    stage('Produce Image') {
      steps {
        container('docker') {
            dockerBuildAndPush image: 'vividseats/vivid-design-patterns', tag: branchName().toLowerCase(), args: [ 'app_sha': env.GIT_COMMIT ]
        }
      }
    }

    stage('Deploy Feature') {
      options {
        timeout(time: 10, unit: 'MINUTES')
      }
      steps {
        container('skipper') {
          dir('jenkins') {
            sh "skipper deploy -n vivid-design-patterns ${ buildContext.branchName(env) } --render-values-file"
            sh "skipper deploy -n vivid-design-patterns ${ buildContext.branchName(env) }"
          }
        }
      }
    }
  }

  post {
    always {
        junit 'reports/**/*.xml'
    }
  }
}
