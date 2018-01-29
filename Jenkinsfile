pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'cd /usr/src/app'
        ws(dir: '/usr/src/app') {
          sh 'npm run start'
        }
        
      }
    }
  }
}